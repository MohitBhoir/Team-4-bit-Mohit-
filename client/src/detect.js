import {useState,useEffect,useRef} from "react"


const Detect = () => {
    const [search, setSearch] = useState('A')
    const [medData, setMedData] = useState([])
    const [loading,setLoading]=useState(true)
    const [detail,setDetail]=useState(false)
    const searchValue = useRef()
    
    const searchItem = () => {
        setSearch(searchValue.current.value)
    }
    useEffect(() => {
        searchValue.current.focus()
    }, [])
    const handleSubmit = (e) => {
        e.preventDefault()
    }
    const fetchMedicines = async () => {
        setLoading(true)
        try {
            const res = await fetch(`/api/v1/medicines?search=${search}`)
            const data = await res.json()
            setLoading(false)
            const medicineData = data
            if (medicineData) {
                const newData = medicineData.map((d) => {
                    const { disease, medicines, symptoms, description } = d
                    return { disease, medicines, symptoms, description }
                })
                setMedData(newData)
            }
        } catch (err) {
            console.log(err)
            setLoading(false)
        }
    }
    useEffect(() => {
        fetchMedicines()
    }, [search])
    const changeData = (disease) => {
        const newData = medData.filter((d) => d.disease === disease)
        setDetail(true)
        setMedData(newData)
    }
    const oldData = () => {
        setDetail(false)
        fetchMedicines()
    }
    return <>
        {!detail?<form onSubmit={handleSubmit} className="sign-form">
            <h3>Search Disease</h3>
            <input type="text" ref={searchValue} onChange={searchItem} />
            <button type='submit' className="input-submit">search</button>
        </form>:<></>}
        <div>
            {loading ? <div className="para"><h1>loading....</h1></div> : <></>}
            {!detail? <div className="grid-box">{
                medData.map((d) => {
                    const { disease, description}=d
                    return <article key={disease}>
                        <h1 className="med-h1">{disease}</h1>
                        <p className="med-p">{description}</p>
                        <button className="med-input" onClick={()=>changeData(disease)}>Details</button>
                    </article>
                })
            }</div> : <div className="center-div">{
                medData.map((d) => {
                    const { disease, description, medicines, symptoms } = d
                    return <article key={disease} className="detail-box">
                        <h1 className="med-h1">{disease}</h1>
                        <p className="med-p">{description}</p>
                        <h4 className="med-h4">Symptoms:-</h4>
                        <h4 className="med-h4">{symptoms}</h4>
                        <h4 className="med-h4">Medicines:-</h4>
                        <ul>{
                            medicines.map((m) => {
                                return <li key={m} className="med-li">{m}</li>
                            })
                        }</ul>
                        <button className="med-input" onClick={oldData}>All medicines</button>
                    </article>
                })
            }</div>}
        </div>
    </>
    
}


export default Detect;