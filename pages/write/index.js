import React from "react";
import Responsive from "../../components/common/Responsive";
import WriteActionButtons from "../../components/write/WriteActionButton";
import EditorContainer from "../../containers/EditorContainer";
import TagBoxContainer from "../../containers/TagBoxContainer";
import wrapper from "../../store/configureStore";

const write = () => {
    return (
        <Responsive>
            <EditorContainer />
            <TagBoxContainer />
            <WriteActionButtons />
        </Responsive>
    );
};

export default wrapper.withRedux(write);
