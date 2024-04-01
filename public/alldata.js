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
                setData(JSON.stringify(data));
                console.log(loggedIn);
            });

    }, []);

    return (<>
        <h5>All Data in Store:</h5>
        {data}
        {JSON.stringify(ctx)}
    </>);
}
