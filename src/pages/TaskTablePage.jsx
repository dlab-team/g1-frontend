import SidebarComponent from "../components/Navbar/Sidebar";
import TaskTable from "../components/TaskTableComponents/TaskTableComponents/TaskTableComponents";

const TaskTablePage = () => {
    return (
        <div className="flex h-screen w-screen bg-gray-50">
            <div className="flex-shrink-0 w-[100px] h-0 bg-white">
                <SidebarComponent />
            </div>
            <div className="flex overflow-x-auto">
                <TaskTable />
            </div>
        </div>
    );
};

export default TaskTablePage;