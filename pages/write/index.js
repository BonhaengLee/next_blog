import React from "react";
import Responsive from "../../components/common/Responsive";
import TagBox from "../../components/write/TagBox";
import WriteActionButtons from "../../components/write/WriteActionButton";
import EditorContainer from "../../containers/EditorContainer";
import wrapper from "../../store/configureStore";

const write = () => {
    return (
        <Responsive>
            <EditorContainer />
            <TagBox />
            <WriteActionButtons />
        </Responsive>
     );
};

export default wrapper.withRedux(write);
