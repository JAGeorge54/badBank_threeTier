function AllData(){
    const [data, setData] = React.useState('');
    const ctx = React.useContext(UserContext);

    React.useEffect(() => {
        const {loggedInId, loggedIn} = ctx
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);
                console.log(data[0]);
            });

    }, []);

    const Cards = () => {
        const card = data.map((user, i) => {
            return(
                <h1 key={i}>{user.email}</h1>
            )
        })
        return card;
    }
    console.log(Cards())

    return (<>
        <h5>All Data in Store:</h5>
        {/* {data} */}
        {/* <Cards /> */}
    </>);
}