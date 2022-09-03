import HeaderDashboard from "../../components/HeaderDashboard";
import {
  DashboardMain,
  NewProjectContainer,
  ListHeader,
  ProjectList,
  ListHeaderTitle,
  ListItem,
  ListBody,
} from "./style";
import {
  BsCalendarDate,
  BsTag,
  BsCurrencyDollar,
  BsTrash,
} from "react-icons/bs";

function Dashboard() {
  return (
    <>
      <HeaderDashboard />
      <DashboardMain>
        <NewProjectContainer>
          <form>
            <input type="text" placeholder="Nome do projeto" />

            <div className="dropdown">
              <span>
                Início: <BsCalendarDate />
              </span>
              <div className="dropdownContent">
                <input type="date" />
              </div>
            </div>

            <div className="dropdown">
              <span>
                Término: <BsCalendarDate />
              </span>
              <div className="dropdownContent">
                <input type="date" />
              </div>
            </div>

            <div className="dropdown">
              <BsTag />
              <div className="dropdownContent">
                <input type="text" placeholder="Insira uma tag" />
              </div>
            </div>

            <div className="dropdown">
              <BsCurrencyDollar />
              <div className="dropdownContent">
                <input type="text" placeholder="Insira o valor por hora" />
              </div>
            </div>

            <button type="submit">Start</button>
          </form>
        </NewProjectContainer>

        <ProjectList>
          <ListHeader>
            <div className="column">
              <ListHeaderTitle titleColor="blue">
                Nome do projeto
              </ListHeaderTitle>
            </div>
            <div className="column">
              <ListHeaderTitle titleColor="blue">
                Data de criação
              </ListHeaderTitle>
            </div>
            <div className="column">
              <ListHeaderTitle titleColor="blue">
                Data de entrega
              </ListHeaderTitle>
            </div>
            <div className="column">
              <ListHeaderTitle titleColor="blue">Tags</ListHeaderTitle>
            </div>
            <div className="column">
              <ListHeaderTitle titleColor="blue">
                Valor por hora
              </ListHeaderTitle>
            </div>
            <div className="column">
              <ListHeaderTitle titleColor="red">Cronômetro</ListHeaderTitle>
            </div>
            <div className="smallColumn"></div>
          </ListHeader>

          <ListBody>
            <ListItem>
              <div className="column">
                <input type="text" value="Joguinho maroto" />
              </div>
              <div className="column">
                <input type="date" />
              </div>
              <div className="column">
                <input type="date" />
              </div>
              <div className="column">
                <input type="text" value="jogo, nintendo" />
              </div>
              <div className="column">
                <input type="text" value="R$ 280,00" />
              </div>
              <div className="column">
                <input type="text" value="02:48:05 PM" />
              </div>
              <div className="smallColumn">
                <BsTrash />
              </div>
            </ListItem>

            <ListItem>
              <div className="column">
                <input type="text" value="Joguinho maroto" />
              </div>
              <div className="column">
                <input type="date" />
              </div>
              <div className="column">
                <input type="date" />
              </div>
              <div className="column">
                <input type="text" value="jogo, nintendo" />
              </div>
              <div className="column">
                <input type="text" value="R$ 280,00" />
              </div>
              <div className="column">
                <input type="text" value="02:48:05 PM" />
              </div>
              <div className="smallColumn">
                <BsTrash />
              </div>
            </ListItem>

            <ListItem>
              <div className="column">
                <input type="text" value="Joguinho maroto" />
              </div>
              <div className="column">
                <input type="date" />
              </div>
              <div className="column">
                <input type="date" />
              </div>
              <div className="column">
                <input type="text" value="jogo, nintendo" />
              </div>
              <div className="column">
                <input type="text" value="R$ 280,00" />
              </div>
              <div className="column">
                <input type="text" value="02:48:05 PM" />
              </div>
              <div className="smallColumn">
                <BsTrash />
              </div>
            </ListItem>
          </ListBody>
        </ProjectList>
      </DashboardMain>
    </>
  );
}

export default Dashboard;
