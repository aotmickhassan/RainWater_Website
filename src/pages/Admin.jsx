import React, {useState, useEffect} from "react";
import {getParticipants, removeParticipant, updateParticipant} from "../utils/list";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";

const Admin = () => {
    const [participants, setParticipants] = useState([]);
    const [editIdx, setEditIdx] = useState(null);
    const [editForm, setEditForm] = useState({name: "", email: ""});

    useEffect(() => {
        setParticipants(getParticipants());
    }, []);

    const handleRemove = (idx) => {
        if (window.confirm("Are you sure you want to remove this participant?")) {
            removeParticipant(idx);
            setParticipants(getParticipants());
        }
    };

    const handleEdit = (idx) => {
        setEditIdx(idx);
        setEditForm({...participants[idx]});
    };

    const handleEditChange = (e) => {
        setEditForm({...editForm, [e.target.name]: e.target.value});
    };

    const handleEditSave = () => {
        updateParticipant(editIdx, editForm);
        setParticipants(getParticipants());
        setEditIdx(null);
    };

    const downloadCSV = () => {
        let csvContent = "data:text/csv;charset=utf-8,";
        csvContent += "ID,Name,Email\n";

        participants.forEach((row, index) => {
            csvContent += `${index + 1},${row.name},${row.email}\n`;
        });

        const encodedUri = encodeURI(csvContent);
        const link = document.createElement("a");
        link.setAttribute("href", encodedUri);
        link.setAttribute("download", "participants_list.csv");
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (<div className="admin-container">
        <div className="admin-header">
            <div>
                <h1 className="admin-title "
                    style={{textAlign: "center", width: "100%"}}>Admin Portal</h1>
                <p className="text-muted" style={{fontSize: "1.2rem"}}>
                    Manage your convention attendees
                </p>
            </div>
            {participants.length > 0 && (<button onClick={downloadCSV} className="btn btn-success btn-lg shadow-sm">
                📥 Export to Excel
            </button>)}
        </div>

        {participants.length === 0 ? (
            <div className="empty-state">
                <h3>No Registrations Yet</h3>
                <p>Share the registration link to get people started!</p>
            </div>) : (
            <div className="custom-table-wrapper">
                <table className="table table-hover align-middle mb-0">
                    <thead className="table-custom-head">
                    <tr>
                        <th scope="col" className="p-3">ID</th>
                        <th scope="col" className="p-3">Name</th>
                        <th scope="col" className="p-3">Email</th>
                        <th scope="col" className="p-3 text-center" style={{width: "220px"}}>Actions
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    {participants.map((p, idx) => (<tr key={idx} className="table-text">
                        <th scope="row" className="ps-3">{idx + 1}</th>

                        {editIdx === idx ? (
                            <>
                                <td>
                                    <input
                                        type="text"
                                        className="form-control"
                                        name="name"
                                        value={editForm.name}
                                        onChange={handleEditChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        type="email"
                                        className="form-control"
                                        name="email"
                                        value={editForm.email}
                                        onChange={handleEditChange}
                                    />
                                </td>
                                <td>
                                    <button className="btn btn-success btn-sm btn-action me-2"
                                            onClick={handleEditSave}>
                                        💾 Save
                                    </button>
                                    <button className="btn btn-secondary btn-sm btn-action"
                                            onClick={() => setEditIdx(null)}>
                                        ❌ Cancel
                                    </button>
                                </td>
                            </>) : (
                            <>
                                <td className="fw-bold text-dark">{p.name}</td>
                                <td className="text-muted">{p.email}</td>
                                <td>
                                    <button
                                        className="btn btn-outline-primary btn-sm btn-action me-2"
                                        onClick={() => handleEdit(idx)}
                                    >
                                        ✏️ Edit
                                    </button>
                                    <button
                                        className="btn btn-outline-danger btn-sm btn-action"
                                        onClick={() => handleRemove(idx)}
                                    >
                                        🗑️ Remove
                                    </button>
                                </td>
                            </>)}
                    </tr>))}
                    </tbody>
                </table>
            </div>)}
    </div>);
};

export default Admin;