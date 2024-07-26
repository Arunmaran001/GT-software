import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'
function Todo() {
    let [data, setData] = useState([])
    let [formdata, setFormData] = useState({
        
        categoryId: 0,
        category: "",
        description: "",
        createdBy: 1
    })
    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formdata, [name]: value })
    }

    function ToDo() {
        console.log('formdata:', formdata);


        axios.post("http://catodotest.elevadosoftwares.com/Category/InsertCategory", formdata)
        alert("data saved")
    }

    function fetchData() {
        axios.get("http://catodotest.elevadosoftwares.com/Category/GetAllCategories")
            .then(res => setData(res.data.categoryList)
            )
    }
    useEffect(() => {
        fetchData()

    }, [])
    console.log(data)
    const values = [

        {
            name: "categoryList",
            selector: (row) => row.categoryId
        },
        {
            name: "category",
            selector: (row) => row.category
        },
        {
            name: "description",
            selector: (row) => row.description
        },
        {
            name: "createdBY",
            selector: (row) => row.createdBy
        }
    ]
    return (
        <div>Todo
            <input type='text' name="category" value={formdata.category} onChange={handleInputChange} />
            <input type='text' name="description" value={formdata.description} onChange={handleInputChange} />
            <button onClick={ToDo}>click</button>

            <DataTable
                columns={values}
                data={data}>

            </DataTable>
        </div>
    )
}

export default Todo