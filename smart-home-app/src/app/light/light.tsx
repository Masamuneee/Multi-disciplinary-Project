'use client'

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Pagination, Input, Button, useDisclosure } from "@nextui-org/react";
import axios from 'axios';
import { use, useEffect, useState } from 'react';
import { cookies } from "next/headers";

export default function Light() {
    const [lights, setLights] = useState([]);
    const [isOn, setIsOn] = useState(false);

    

    const handleButtonClick = () => {
        setIsOn(!isOn); 
    };

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Name</TableColumn>
                    <TableColumn>Status</TableColumn>
                    <TableColumn>Actions</TableColumn>
                </TableHeader>
                <TableBody>
                    <TableRow>
                        <TableCell>1</TableCell>
                        <TableCell>Light 1</TableCell>
                        <TableCell>
                            <Chip color={isOn ? "success" : "danger"}>{isOn ? "On" : "Off"}</Chip>
                        </TableCell>
                        <TableCell>
                            <Button color={isOn ? "danger" : "success"} onClick={handleButtonClick}>
                                {isOn ? "Turn off" : "Turn on"}
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
}