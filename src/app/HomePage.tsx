import React, { useState, useEffect } from "react";
import {
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    List,
    ListItem,
    ListItemText,
} from "@mui/material";

interface Project {
    id: number;
    img?: string;
    title: string;
    description: string;
    link: string;
}

interface Skill {
    id: number;
    name: string;
}

interface User {
    name: string;
    email: string;
    profession: string;
    projects: Project[];
    skills: Skill[];
}

const HomePage: React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data: User[] = [
                {
                    name: "User One",
                    email: "user1@example.com",
                    profession: "Web Developer",
                    projects: [
                        {
                            id: 1,
                            img: "https://example.com/path-to-your-image.jpg",
                            title: "ระบบประเมินร้านอาหารออนไลน์",
                            description: "A personal portfolio website to showcase my projects and skills.",
                            link: "https://example.com/portfolio"
                        },
                        {
                            id: 2,
                            img: "https://example.com/path-to-your-image.jpg",
                            title: "E-commerce Platform",
                            description: "An online platform for buying and selling products.",
                            link: "https://example.com/ecommerce"
                        },
                        {
                            id: 3,
                            img: "https://example.com/path-to-your-image.jpg",
                            title: "E-commerce Platform3",
                            description: "An online platform for buying and selling products.",
                            link: "https://example.com/ecommerce"
                        },
                        {
                            id: 4,
                            img: "https://example.com/path-to-your-image.jpg",
                            title: "E-commerce Platform4",
                            description: "An online platform for buying and selling products.",
                            link: "https://example.com/ecommerce"
                        },
                        {
                            id: 5,
                            img: "https://example.com/path-to-your-image.jpg",
                            title: "E-commerce Platform5",
                            description: "An online platform for buying and selling products.",
                            link: "https://example.com/ecommerce"
                        },
                        {
                            id: 6,
                            img: "https://example.com/path-to-your-image.jpg",
                            title: "E-commerce Platform6",
                            description: "An online platform for buying and selling products.",
                            link: "https://example.com/ecommerce"
                        }
                    ],
                    skills: [
                        { id: 1, name: "JavaScript" },
                        { id: 2, name: "React" },
                        { id: 3, name: "Node.js" }
                    ]
                },
                {
                    name: "User Two",
                    email: "user2@example.com",
                    profession: "Data Scientist",
                    projects: [
                        {
                            id: 1,
                            title: "Data Analysis Tool",
                            description: "A tool for analyzing and visualizing data.",
                            link: "https://example.com/data-analysis"
                        },
                        {
                            id: 2,
                            title: "Machine Learning Model",
                            description: "A machine learning model for predicting trends.",
                            link: "https://example.com/ml-model"
                        }
                    ],
                    skills: [
                        { id: 1, name: "Python" },
                        { id: 2, name: "TensorFlow" },
                        { id: 3, name: "Pandas" }
                    ]
                }
            ];
            setUsers(data);
        };

        fetchData();
    }, []);

    return (
        <Container>
            {users.map(user => (
                <Grid container spacing={4} key={user.email} style={{ marginTop: '20px' }}>
                    <Grid item xs={12}>
                        <Typography variant="h4" component="h2">
                            {user.name}
                        </Typography>
                        <Typography variant="h6" component="p">
                            {user.profession}
                        </Typography>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h5" component="h3">
                            Projects
                        </Typography>
                        <Grid container spacing={2}>
                            {user.projects.map(project => (
                                <Grid item xs={12} sm={6} md={4} key={project.id}>
                                    <Card>
                                        {project.img && (
                                            <img src={project.img} alt={project.title} style={{ width: '100%', height: 'auto' }} />
                                        )}
                                        <CardContent>
                                            <Typography variant="h6" component="h4">
                                                {project.title}
                                            </Typography>
                                            <Typography variant="body2" component="p">
                                                {project.description}
                                            </Typography>
                                        </CardContent>
                                        <CardActions>
                                            <Button size="small" color="primary" href={project.link} target="_blank" rel="noopener noreferrer">
                                                View Project
                                            </Button>
                                        </CardActions>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>

                    <Grid item xs={12}>
                        <Typography variant="h5" component="h3">
                            Skills
                        </Typography>
                        <List>
                            {user.skills.map(skill => (
                                <ListItem key={skill.id}>
                                    <ListItemText primary={skill.name} />
                                </ListItem>
                            ))}
                        </List>
                    </Grid>
                </Grid>
            ))}
        </Container>
    );
};

export default HomePage;
