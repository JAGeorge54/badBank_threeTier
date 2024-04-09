function Balance(){
  const [show, setShow]     = React.useState(true);
  const [status, setStatus] = React.useState('');
  const ctx = React.useContext(UserContext);

  return (
    <Card
      bgcolor="info"
      header={ctx[2].logIn ? `Balance for ${ctx[0].user.email}` : 'Not Logged In'}
      status={status}
      body={show ?
        <BalanceForm setShow={setShow} setStatus={setStatus}/> :
        <BalanceMsg setShow={setShow} setStatus={setStatus}/>}
    />
  )

}

function BalanceMsg(props){
  return(<>
    <h5>Success</h5>
    <button type="submit" 
      className="btn btn-light" 
      onClick={() => {
        props.setShow(true);
        props.setStatus('');
      }}>
        Check balance again
    </button>
  </>);
}

function BalanceForm(props){
  const ctx = React.useContext(UserContext);
  const [email, setEmail]   = React.useState('');
  const [balance, setBalance] = React.useState(ctx[4].userBal.balance);  

  function handle(){
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(text);
            props.setShow(false);
            setBalance(user.balance);
            console.log('JSON:', data);
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  }

  const Transactions = () => {
    return (<> 
    <h1>test transactions</h1>
      <h1>test transactions</h1>
      <h1>test transactions</h1>
      <h1>test transactions</h1>
      <h1>test transactions</h1>
    </>
    )
  }

  return (<>

    Balance<br/>
    {ctx[2].logIn ? ctx[0].user.balance : 'Not Logged In'}<br/>

    Transactions<br/>
    {ctx[2].logIn ?
    <Transactions /> :
    'Not Logged In'}<br/>

  </>);
}