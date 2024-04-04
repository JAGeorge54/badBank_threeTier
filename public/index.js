function Spa() {
  const [user, setUser] = React.useState({email: ''});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [userBal, setUserBal] = React.useState({balance: 0});

function setlogIn (log) {
  setLoggedIn(log)
}

function idUser (data) {
  setUser({...user, email: data.email})
}

function balanceUser (balance) {
  setUserBal({...userBal, balance: balance})
}

  return (
    <HashRouter>
      <div>
      <UserContext.Provider value={[{user: user}, {idUser: idUser}, {logIn: loggedIn}, {setlogIn: setlogIn}, {userBal: userBal}, {balanceUser: balanceUser}]}>
        <NavBar />        
          <div className="container" style={{padding: "20px"}}>
            <Route path="/" exact component={Home} />
            <Route path="/CreateAccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            {/* <Route path="/transactions/" component={Transactions} /> */}
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
