const listCustomer = [

{id:1, nome: 'parakeet',}, 
{id:2, nome:'passarosuke'},
{id:3, nome:'Birb'}
]

const renderCustomers = (customer, index) => {
    return (
        <li key={`Customer-${customer.id}`}>{customer.nome}</li>
    )
}
function ListasEChaves(){
    return (
        <div>
            <ul>
                {listCustomer.map(renderCustomers)}
            </ul>
        </div>
    )
}

export default ListasEChaves