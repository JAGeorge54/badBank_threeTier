function Balance(){
  const [status, setStatus] = React.useState('');
  const ctx = React.useContext(UserContext);

  return (
    <Card
      bgcolor="info"
      header={ctx[2].logIn ? `Balance for ${ctx[0].user.email}` : 'Please Log In to view your balance'}
      body={
      <BalanceForm setStatus={setStatus}/>
    }
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
  const [show, setShow]     = React.useState(true);
  const [email, setEmail]   = React.useState(ctx[0].user.email);
  const [balance, setBalance] = React.useState([]);  

  React.useEffect(() => {
    fetch(`/account/findOne/${email}`)
    .then(response => response.text())
    .then(text => {
        try {
            const data = JSON.parse(text);
            props.setStatus(text);
            console.log('JSON:', data);
            setBalance(data.transactions)
            console.log(data)
        } catch(err) {
            props.setStatus(text)
            console.log('err:', text);
        }
    });
  },[])
  const display = () => {
    if (show === true) {
      setShow(false)
    } else setShow(true)
  }

  const Transactions = () => {
    if (!ctx[2].logIn) {
      return <p>not logged in</p>
    }
    const History = () => {
      const log = balance.map((item, i) => {
        return <li key={i}>{item}</li>
      })
      return (
        <ul>
          {log}
        </ul>
      )
    }
    return (<> 
    <History />
    </>
    )
  }

  return (<>
    Balance<br/>
    {ctx[2].logIn ? `$ ${ctx[0].user.balance}` : '$0'}<br/><br/>

    

    Past Transactions<br/>
    {!show && <Transactions />}
    <button disabled={!ctx[2].logIn} onClick={() => display()}>{show ? 'show transactions' : 'hide transactions'}</button><br/>

  </>);
}