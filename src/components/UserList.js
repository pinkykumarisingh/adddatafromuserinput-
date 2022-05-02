import React from "react";
import { Table } from "react-bootstrap";

// import { useState } from "react";



function UserList({ listOptions, getuserData }) {
    // const userList = JSON.parse(localStorage.getItem("user")) || [];

    // const [userData] = React.useState(userList);

    // console.log("rgh", listOptions)

    // const search = checklist => array.find(element => element.email === checklist);
    // if (search("email")) {
    //     alert(search.value, search.other);
    // } else {
    //     alert('No result found');
    // }





    // const defaultList = [
    //     { name: "" },
    //     { email: "" },
    //     { phone: "" },
    //     { Action: "x" }
    // ];

    // const [list, updateList] = useState(defaultList);

    // const handleRemoveItem = (e) => {
    //     const name = e.target.getAttribute("name")
    //     updateList(list.filter(item => item.name !== name));
    // };

    return (
        <div className="userlist">
            <Table striped bordered hover variant="btn btn-info">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Phone</th>
                        {/* <th>Action</th>
                        <th>Edit</th> */}
                    </tr>
                </thead>
                <tbody>
                    {listOptions.map((data, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{data?.name}</td>
                            <td>{data?.email}</td>
                            <td>{data?.phone}</td>
                            {/* <td><DeleteItems item={data} getuserData={() => getuserData()} /> </td>
                            <td><EditModals item={data} getuserData={() => getuserData()} data={data} index={i} /></td> */}
                        </tr>
                    ))}

                </tbody>



            </Table>
        </div >
    );
}
export default UserList;
