import { useState } from "react"

const Search = props=>{
    const [searchText, setSearchText] = useState("")

    return <div>
        <input type="text" onChange={e=>{setSearchText(e.target.value)}} placeholder="введите запрос!"/>
        <h4>Вы ввели: {searchText}</h4>
    </div>
}
export default Search;