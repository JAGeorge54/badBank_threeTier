function AllData(){
    const [data, setData] = React.useState([]);    

    React.useEffect(() => {
        
        // fetch all accounts from API
        fetch('/account/all')
            .then(response => response.json())
            .then(data => {
                console.log(data);
                setData(data);             
            });

    }, []);

    function Cards () {
        const card = data.map((user, i) => {
            return (
                <div key={i} className='card'>
                    <h1 className='card-header'>{user.name}</h1>
                    <ul>
                        <li>User ID: {user._id}</li>
                        <li>Email: {user.email}</li>
                        <li>Password: {user.password}</li>
                        <li>Balance: {user.balance}</li>
                    </ul>
                </div>
            )
        })
        return card
    }



    return (<>
        <h5>All Data in Store:</h5>
        {/* {JSON.stringify(data)} */}
        <Cards />
    </>);
}