import LoyaltyIcon from "@material-ui/icons/Loyalty";
import Row from "../Row/Row";
import useDepartmentLeaders from "../../hooks/useDepartmentLeaders";
import DepartmentImages from "./DepartmentImages";
const DepartmentLeaderWidget: React.FC = () => {
  const departmentLeaders = useDepartmentLeaders();
  return (
    <div className="department_leaders">
      <div className="headline">
        <LoyaltyIcon style={{ marginLeft: 10 }} />
        <h4>TOP LEADERS OF MY DEPARTMENT</h4>
      </div>
      {!departmentLeaders
        ? null
        : departmentLeaders.length == 0
        ? null
        : departmentLeaders.map((leader, index) => (
            <Row
              name={leader.name}
              location={leader.location}
              image={DepartmentImages[index]}
              coin={leader.coin}
            />
          ))}
    </div>
  );
};

export default DepartmentLeaderWidget;
