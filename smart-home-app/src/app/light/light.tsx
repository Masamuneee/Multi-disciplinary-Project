'use client'

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Pagination, Input, Button, useDisclosure } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from 'react';


export default function Light() {
    const [isOn, setIsOn] = useState(false);
    const [value, setValue] = useState(0);

    useEffect(() => {
        axios.get('https://io.adafruit.com/api/v2/Masamunee/feeds/yolo-led/data', {
          headers: {
            'X-AIO-Key': 'aio_Yshz47Mu1nqrYsCf54WFAzpQt305'
          }
        }).then((response) => {
            setValue(response.data[response.data.length - 1].value);
        }).catch((error) => {
            console.log(error);
            }
        );
    }
    , []);

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
                    <TableColumn>Value</TableColumn>
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
                            <Tooltip content="Light value">
                                <Input placeholder="Light value" disabled={true} value={value.toString()} />
                            </Tooltip>
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