import React, { useEffect, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeField, initialize } from "../reducers/write";
import Editor from "../components/write/Editor";
import wrapper from "../store/configureStore";

const EditorContainer = () => {
    const dispatch = useDispatch();
    // @ : useSelector를 사용해서 리덕스 스토어의 상태를 조회 할 땐 만약 상태가 바뀌지 않았으면 리렌더링하지 않음
    // @ : EditorContainer 의 경우 다른 값이 바뀔 때 title, body 값엔 변화가 없으니까, 리렌더링되지 않는 것
    const { title, body } = useSelector(({ write }) => ({
        title: write.title,
        body: write.body,
    }));

    // @ : Editor 컴포넌트에서 사용할 useEffect에서 onChangeField를 사용할 것이기 때문에 useCallback으로 감싸줌
    // @ : 나중에 Editor에서 사용할 useEffect가 컴포넌트가 화면에 나타났을 때 딱 한번만 실행되기 때문
    const onChangeField = useCallback(
        (payload) => dispatch(changeField(payload)),
        [dispatch]
    );
    // @ : 사용자가 WritePage 벗어날 때, 언마운트될 때 초기화
    useEffect(() => {
        return () => {
            dispatch(initialize());
        };
    }, [dispatch]);
    return <Editor onChangeField={onChangeField} title={title} body={body} />;
};

export default EditorContainer;
