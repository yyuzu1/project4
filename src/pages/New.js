import { useContext } from "react";
import { XDispatchContext } from "../App";
import { useNavigate } from "react-router-dom";
import Editor from "../component/Editor";

const New = () => {
    const { onCreate } = useContext(XDispatchContext);
    const navigate = useNavigate();

    const onSubmit = (date, category, item, kcal) => {
        onCreate(date, category, item, kcal);
        navigate('/', { replace: true });
    };

    return (
        <div>
            <h2>새 기록 작성</h2>
            <Editor onSubmit={onSubmit} />
        </div>
    );
};

export default New;