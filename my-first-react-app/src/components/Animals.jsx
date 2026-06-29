export default function Animals(){
    var animals = ['lion', 'cow', 'snake', 'lizard']
    return (
        <>
            <div>
                <h1>Animals</h1>
                <ul>
                    {animals.map((animal) => {
                        return <li key={animal}>{animal}</li>
                    })}
                </ul>
            </div>
        </>
    )
}