import iconCheck from "../assets/icon-check.svg";
import iconAcross from "../../assets/icon-cross.svg";
export const Todo = ({ todo, handleSetComplete, handleDelete }) => {
    const { id, title, completed } = todo;

    return (
        <div className="flex items-center justify-between text-gray-600 dark:text-gray-300 p-4 bg-white  dark:bg-[#25273c] border-b border-solid border-gray-200 dark:border-gray-600  transition-all duration-300 ease-in-out">
            <div className="flex items-center">
                {completed ? (
                    <div
                        onClick={() => handleSetComplete(id)}
                        className="bg-blue-700 p-1 rounded-full cursor-pointer"
                    >
                        <img
                            className="h-4 w-4 "
                            src={iconCheck}
                            alt="Check Icon"
                        />
                    </div>
                ) : (
                    <span
                        onClick={() => handleSetComplete(id)}
                        className={`border  border-gray-500 border-solid p-3 rounded-full cursor-pointer`}
                    ></span>
                )}

                <p
                    className={
                        "pl-3 " +
                        (completed && "line-through decoration-gray-600")
                    }
                >
                    {title}
                </p>
            </div>
            <img
                className="h-5 cursor-pointer transition-all duration-300 ease-in"
                src={iconAcross}
                alt="icon-across"
                onClick={() => handleDelete(id)}
            />
        </div>
    );
};

export default Todo;
