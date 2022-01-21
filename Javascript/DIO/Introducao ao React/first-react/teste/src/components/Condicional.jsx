const buttonA = <button>Historico dos clientes</button>;
const buttonB = <button>Cadastrar clientes</button>;
const hasCustomer = true;

const renderShowHistory = () => (
  <div>
    Clique no botão abaixo para visualizar o histórico dos clientes <br />
    {buttonA}
  </div>
);

const renderAddCustomer = () => (
  <div>
    Clique no botão abaixo para cadastrar o clientes<br></br>
    {buttonB}
  </div>
);

function Condicional() {
  return (
    <div>
      Digital innovation one
      <p>Bem vindo à aula</p>
      {hasCustomer ? renderShowHistory() : renderAddCustomer()}
      </div>
      );
    
  
}

export default Condicional;
