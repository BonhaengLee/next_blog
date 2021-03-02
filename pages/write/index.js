import React from "react";
import { Provider } from "react-redux";
import Responsive from "../../components/common/Responsive";
import TagBox from "../../components/write/TagBox";
import WriteActionButtons from "../../components/write/WriteActionButton";
import EditorContainer from "../../containers/EditorContainer";
import wrapper from "../../store/configureStore";

const write = () => {
    return (
        // <Provider store={configureStore()}>
        <Responsive>
            <EditorContainer />
            <TagBox />
            <WriteActionButtons />
        </Responsive>
        // </Provider>
    );
};

export default wrapper.withRedux(write);
