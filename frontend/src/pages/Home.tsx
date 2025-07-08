import TasksContent from "../components/TasksContent";
import TasksMenu from "../components/TasksMenu";

const Home: React.FC = () => {
  return (
    <div className="b-tasks">
      <div className="tasks__container">
        <div className="tasks__menu">
          <TasksMenu/>
        </div>
        <div className="tasks__content">
          <TasksContent/>
        </div>
      </div>
    </div>
  )
}

export default Home;
