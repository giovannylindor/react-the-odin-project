function List(props){
    return (
        <ul>
            {props.teams.map((team) => {
                return team.startsWith('M') && <li key={team} style={{listStyle:"none"}}>{team}</li>;
            })}
        </ul>
    );
}

export default function Teams() {
    const teams = ['GSW', 'ATL', 'MIA', 'DEN', 'OKC', 'MIL', 'BKN', 'PHI',
        'ORL', 'CHA', 'POR', 'SAC', 'TOR', 'BOS', 'WAS', 'DAL', 'SA', 'HOU', 'CHI', 'MEM',
        'PHX', 'MIN', 'LAL', 'LAC', 'IND', 'NO', 'UTA', 'DET', 'CLE'];

    return(
        <div>
            <h1>Teams: </h1>
            <List teams={teams} />
        </div>
    );

}