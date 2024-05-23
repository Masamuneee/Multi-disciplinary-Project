'use client'

import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Pagination, Input, Button, useDisclosure } from "@nextui-org/react";
import axios from "axios";
import { useEffect, useState } from 'react'

export default function Sound() {
    const [sound, setSound] = useState<string[]>([]);
    const [time_create, setTime] = useState<string[]>([]);

    useEffect(() => {
        axios.get('https://io.adafruit.com/api/v2/rocklaai/feeds/giong-noi/data', {
          headers: {
            'X-AIO-Key': 'aio_DjUZ65wvTisC0Ov0g4Uw399bxYjA'
          }
        }).then((response) => {
            for (let i = 0; i < response.data.length; i++) {
                const value = response.data[i].value;
                const time = response.data[i].created_at;
                // check if value is a string
                if (typeof value === 'string') {
                    setSound((prev) => [...prev, value]);
                }
                const date = new Date(time);
                const datePart = date.toLocaleDateString('en-GB').split('/').reverse().join('/');
                const timePart = date.toLocaleTimeString('en-US', { hour12: true });
                const timeModify = `${datePart} ${timePart}`;
                setTime((prev) => [...prev, timeModify]);
            }
        }).catch((error) => {
            console.log(error);
            }
        );
    }
    , []);

    return (
        <div>
            <Table>
                <TableHeader>
                    <TableColumn>ID</TableColumn>
                    <TableColumn>Sound</TableColumn>
                    <TableColumn>Time</TableColumn>
                </TableHeader>
                <TableBody>
                    {sound.map((value, index) => (
                        <TableRow key={index}>
                            <TableCell>{index + 1}</TableCell>
                            <TableCell>
                                <Chip color="success">{value}</Chip>
                            </TableCell>
                            <TableCell>
                                <Tooltip content="Time">
                                    <Input placeholder="Time" disabled={true} value={time_create[index]} />
                                </Tooltip>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}