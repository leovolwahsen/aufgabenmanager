import { Button, Flex, List, Typography } from "antd";
import { useAxios } from "../data/useAxios";
import { useEffect, useState } from "react";
import { ITasks } from "../types/tasks";
import { toast, ToastContainer } from 'react-toastify';
import { FaPencil, FaCheck } from "react-icons/fa6";
import 'react-toastify/dist/ReactToastify.css';
const { Title } = Typography;

export const Tasks = () => {
    const [tasks, setTasks] = useState<ITasks[]>([]);
    const axiosData = useAxios();

    useEffect(() => {
        axiosData.get<ITasks[]>("/tasks").then((res) => {
            setTasks(res.data.map((task) => ({ ...task, completed: false })));
        }).catch((err) => {
            console.log(`Error occured when fetching tasks: ${err}`);
            throw err;
        })
    }, []);

    const handleComplete = (_id: string) => {
        setTasks(prevTasks =>
            prevTasks.map((task) =>
                task._id === _id ? { ...task, completed: !task.complete } : task
            ));
    };

    const handleEdit = (_id: string) => {
        const task = tasks.find((task) => task._id === _id);
        if (task) {
            toast.info(`Editing task: ${_id}`);
        }
    };

    return (
        <Flex vertical align="center" justify="center" style={{ width: "100%", padding: "20px" }}>
            <ToastContainer />
            <Title level={1}>Heutigen Aufgaben:</Title>
            <Flex vertical align="center" justify="center" style={{ width: "100%" }}>
                <List
                    size="large"
                    bordered
                    dataSource={tasks}
                    renderItem={(item) => (
                        <List.Item
                            actions={[
                                <Flex gap={10}>
                                    <Button type="link" onClick={() => handleEdit(item._id)} style={{ border: "1px solid lightGray", background: "coral", color: "black" }}>
                                        <FaPencil size={20}/>
                                    </Button>
                                    <Button type="link" onClick={() => handleComplete(item._id)} style={{ border: "1px solid lightGray", background: "lightGreen", color: "black" }}>
                                        <FaCheck size={20} />
                                    </Button>
                                </Flex>
                            ]}
                            style={{
                                textDecoration: item.complete ? "line-through" : "none",
                                color: item.complete ? "gray" : "black"
                            }}>
                            {item.task}
                        </List.Item>
                    )} />
            </Flex>
        </Flex>
    );
};