import React, { useEffect, useState } from 'react'
import axios from 'axios'
import DataTable from 'react-data-table-component'
import { MdEdit } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2'
import { set } from 'date-fns';
function Todo() {
    let [data, setData] = useState([])
    let [formdata, setFormData] = useState({

        categoryId: 0,
        category: "",
        description: "",
        createdBy: 1
    })
    let [editmode,setEditMode] = useState()

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormData({ ...formdata, [name]: value })
    }
    function handleDelete(id) {
        let data = {
            categoryId: id,
            removedRemarks: " ",
            createdBy: 1
        }
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post("http://catodotest.elevadosoftwares.com/Category/RemoveCategory", data)
                    .then(() => {


                    })

                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success"
                });
            }
        });

        console.log('Delete category  ID:', id);
    }
    function handleEdit(category) {
        setFormData({
            categoryId: category.categoryId,
            category: category.category,
            description: category.description,
            createdBy: category.createdBy
        })
        setEditMode()
        console.log('Edit category:', category);
    }

    function ToDo() {
        console.log('formdata:', formdata);



        axios.post("http://catodotest.elevadosoftwares.com/Category/InsertCategory", formdata)
        .then(()=>{
            setFormData({
                category: "",
                description: "",
            });
        })
        
        alert("data saved")
       
    

    }

    function fetchData() {
        axios.get("http://catodotest.elevadosoftwares.com/Category/GetAllCategories")
            .then((res )=> setData(res.data.categoryList)
            )
        
                
            
       
    }
    useEffect(() => {
        fetchData()
      

    }, [data])
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
        },
        {
            name: "action",
            selector: (row) =>
                <div>
                    <button onClick={() => handleDelete(row.categoryId)} style={{ cursor: 'pointer', marginRight: '10px' }}> <MdDelete /></button>
                    <button onClick={() => handleEdit(row)} style={{ cursor: 'pointer', marginRight: '10px' }} ><MdEdit /></button>

                </div>
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