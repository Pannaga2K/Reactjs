## FUNCTIONAL COMPONENT 
    
### HOOKS
    - useState  
        * RETURNS 2 BINDINGS 
            * THE ACTUAL VALUE FOR THE STATE
            * THE STATE UPDATER FUNCTION FOR SAID STATE
        * SYNTAX
            * const [<any_var_name>, <any_var_name_suitable_for_updating>] = useState(<initial_state>);
            * EX. const [game, setGame] = useState("NFS"); setGame(<another_game>);
    - useEffect
        * IT SERVES THE SAME PURPOSE AS 
            * componentDidMount 
            * componentDidUpdate 
            * componentWillUnmount
            BUT UNIFIED INTO A SINGLE API
        * DEPENDENCIES 
            * AN EMPTY ARRAY AS A SECOND ARGUMENT. THAT IS, VARIABLES ON WHICH useEffect DEPENDS ON TO RE-RUN
            * WHEN THE ARRAY IS EMPTY THE EFFECT RUNS ONLY ONCE.
        * SYNTAX 
            * useEffect(() => ... , []);
            * ANONYMOUS FUNCTION AND AN EMPTY ARRAY 
        * AN EFFECT FUNCTION MUST NOT RETURN ANYTHING BESIDES A FUNCTION. 
        * THAT IS, PROMISE DOES'NT WORK INSIDE useEffect.
        * BUT, WE CAN CALL ANOTHER FUNCTION WHICH RETURNS PROMISE IN useEffect. 

