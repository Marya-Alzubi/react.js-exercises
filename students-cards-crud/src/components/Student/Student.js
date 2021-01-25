import React , {Component} from 'react';
import CardComp from '../Card/Card';
import {Container, Row, Col, Button, Card} from 'react-bootstrap';

class Student extends Component {
    state = {
        students : [
        {id: '1', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'Maria Alzu\'bi' , studentImage :'https://scontent.famm7-1.fna.fbcdn.net/v/t1.0-9/79416928_2563039093815545_8308397759170347008_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=5hnwWi5xAHMAX__ewxf&_nc_ht=scontent.famm7-1.fna&oh=c9fee1258e0b06252e3e784014d6cf1a&oe=6030A427' , facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi' },

        {id: '2', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'Lojain Nahhas' , studentImage :'https://scontent.famm7-1.fna.fbcdn.net/v/t1.0-9/15726375_10154979096699258_6220684316253724563_n.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=iLbumLxgySMAX8DTQ7I&_nc_ht=scontent.famm7-1.fna&oh=f6706957c3afddf02c082d2c8b2a025e&oe=6032AB29' , facebook :'https://www.facebook.com/lojain.nahhas.7' , linkedin : 'https://www.linkedin.com/in/lojain-nahhas-creative/' , gitHub : 'https://github.com/GforGNU' },

        {id: '3', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'Enoooz' , studentImage :'https://s3-eu-west-1.amazonaws.com/grm-assets/28278/robert-downey-jr-iron-man.jpg' , facebook :'https://www.facebook.com/laith.alenooz.357' , linkedin : 'https://www.linkedin.com/in/laithalenooz/' , gitHub : 'https://github.com/laithalenooz'  },

        {id: '4', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'Jacoub' , studentImage :'https://avatars.githubusercontent.com/u/71829355?s=460&u=ab772fb234f2673202a3e736fd5f7b62c8764e67&v=4' ,facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi'  },

        {id: '5', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'firas' , studentImage :'https://scontent.famm9-1.fna.fbcdn.net/v/t1.0-9/118777402_3405549822839175_7907296953818932221_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEnxghYXPr0qLLIb7vGHze6nTg7URL3ExOdODtREvcTE8VNQd8VW409F49XngsNwhi1Wn0hm3tpUG1uOy9-RKbM&_nc_ohc=K92gqH0XVHQAX-y5Qbb&_nc_ht=scontent.famm9-1.fna&oh=dbfe79b87696686f287791acbbc13da1&oe=6030EC04' , facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi' },

        {id: '6', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'lara' , studentImage :'https://avatars.githubusercontent.com/u/71829656?s=460&u=17b3dca6ed4d9c13fbeb49c7a3c3fe0a66db1e91&v=4' , facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi' },
    ],
        showStudents : true,
    }
    nickNameHandler =() => {
        this.setState(
            {
                students : [
                { id: '1', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'mmr' , studentImage :'https://scontent.famm7-1.fna.fbcdn.net/v/t1.0-9/79416928_2563039093815545_8308397759170347008_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=5hnwWi5xAHMAX__ewxf&_nc_ht=scontent.famm7-1.fna&oh=c9fee1258e0b06252e3e784014d6cf1a&oe=6030A427' , facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi' },

                { id: '2', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'lolo' , studentImage :'https://scontent.famm7-1.fna.fbcdn.net/v/t1.0-9/15726375_10154979096699258_6220684316253724563_n.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=iLbumLxgySMAX8DTQ7I&_nc_ht=scontent.famm7-1.fna&oh=f6706957c3afddf02c082d2c8b2a025e&oe=6032AB29' , facebook :'https://www.facebook.com/lojain.nahhas.7' , linkedin : 'https://www.linkedin.com/in/lojain-nahhas-creative/' , gitHub : 'https://github.com/GforGNU' },

                { id: '3', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'Enoooz' , studentImage :'https://s3-eu-west-1.amazonaws.com/grm-assets/28278/robert-downey-jr-iron-man.jpg' , facebook :'https://www.facebook.com/laith.alenooz.357' , linkedin : 'https://www.linkedin.com/in/laithalenooz/' , gitHub : 'https://github.com/laithalenooz' },

                { id: '4', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'Jacoub' , studentImage :'https://avatars.githubusercontent.com/u/71829355?s=460&u=ab772fb234f2673202a3e736fd5f7b62c8764e67&v=4' ,facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi'  },

                { id: '5', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'firas' , studentImage :'https://scontent.famm9-1.fna.fbcdn.net/v/t1.0-9/118777402_3405549822839175_7907296953818932221_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEnxghYXPr0qLLIb7vGHze6nTg7URL3ExOdODtREvcTE8VNQd8VW409F49XngsNwhi1Wn0hm3tpUG1uOy9-RKbM&_nc_ohc=K92gqH0XVHQAX-y5Qbb&_nc_ht=scontent.famm9-1.fna&oh=dbfe79b87696686f287791acbbc13da1&oe=6030EC04' , facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi' },

                { id: '6', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'lara' , studentImage :'https://avatars.githubusercontent.com/u/71829656?s=460&u=17b3dca6ed4d9c13fbeb49c7a3c3fe0a66db1e91&v=4' , facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi' },
            ],
                showNickNameButton : true,
        } );
    }
    oldNameHandler =() => {
        this.setState(
            {
                students : [
                { id: '1', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'Maria Alzu\'bi' , studentImage :'https://scontent.famm7-1.fna.fbcdn.net/v/t1.0-9/79416928_2563039093815545_8308397759170347008_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=5hnwWi5xAHMAX__ewxf&_nc_ht=scontent.famm7-1.fna&oh=c9fee1258e0b06252e3e784014d6cf1a&oe=6030A427' , facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi' },

                { id: '2', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'Lojain Nahhas' , studentImage :'https://scontent.famm7-1.fna.fbcdn.net/v/t1.0-9/15726375_10154979096699258_6220684316253724563_n.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=iLbumLxgySMAX8DTQ7I&_nc_ht=scontent.famm7-1.fna&oh=f6706957c3afddf02c082d2c8b2a025e&oe=6032AB29' , facebook :'https://www.facebook.com/lojain.nahhas.7' , linkedin : 'https://www.linkedin.com/in/lojain-nahhas-creative/' , gitHub : 'https://github.com/GforGNU' },

                { id: '3', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'Enoooz' , studentImage :'https://s3-eu-west-1.amazonaws.com/grm-assets/28278/robert-downey-jr-iron-man.jpg' , facebook :'https://www.facebook.com/laith.alenooz.357' , linkedin : 'https://www.linkedin.com/in/laithalenooz/' , gitHub : 'https://github.com/laithalenooz' },

                { id: '4', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'Jacoub' , studentImage :'https://avatars.githubusercontent.com/u/71829355?s=460&u=ab772fb234f2673202a3e736fd5f7b62c8764e67&v=4' ,facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi'  },

                { id: '5', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'firas' , studentImage :'https://scontent.famm9-1.fna.fbcdn.net/v/t1.0-9/118777402_3405549822839175_7907296953818932221_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEnxghYXPr0qLLIb7vGHze6nTg7URL3ExOdODtREvcTE8VNQd8VW409F49XngsNwhi1Wn0hm3tpUG1uOy9-RKbM&_nc_ohc=K92gqH0XVHQAX-y5Qbb&_nc_ht=scontent.famm9-1.fna&oh=dbfe79b87696686f287791acbbc13da1&oe=6030EC04' , facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi' },

                { id: '6', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'lara' , studentImage :'https://avatars.githubusercontent.com/u/71829656?s=460&u=17b3dca6ed4d9c13fbeb49c7a3c3fe0a66db1e91&v=4' , facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi' },
            ],
                showOldNameButton : false,
            } );
    }

    changeNameHandler = (event , id) => {

        const studentIndex = this.state.students.findIndex(s => {
            return s.id === id;
        });
        console.log(studentIndex); //checkup //have the correct id
        const student = {
            ...this.state.students[studentIndex]
        };
        console.log(student); // checkup it should be a single record (single object)
        // const person = Object.assign({}, this.state.persons[personIndex]);

        student.text = event.target.value;
        console.log(student.text); //input checkup
        const students = [...this.state.students];
        students[studentIndex] = student;
        console.log(students); // checkup it should be an array with the update
        this.setState( {students: students} );
    }

    deleteStudentHandler = (studentIndex) => {
        // const persons = this.state.persons; // mutable way
        // const persons = this.state.persons.slice(); // immutable way
        const students = [...this.state.students]; // immutable way
        students.splice(studentIndex, 1);
        this.setState({students : students})
    }
    toggleNickNameHandler = () => {
        const doesShow = this.state.showNickNameButton;
        if(doesShow){
               document.getElementById('nickName').style.display = "block";
                document.getElementById('oldName').style.display = "none";
            this.setState(
                {
                    students : [
                        { id: '1', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'maria alzubi' , studentImage :'https://scontent.famm7-1.fna.fbcdn.net/v/t1.0-9/79416928_2563039093815545_8308397759170347008_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=5hnwWi5xAHMAX__ewxf&_nc_ht=scontent.famm7-1.fna&oh=c9fee1258e0b06252e3e784014d6cf1a&oe=6030A427' , facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi' },

                        { id: '2', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'lojain nahas' , studentImage :'https://scontent.famm7-1.fna.fbcdn.net/v/t1.0-9/15726375_10154979096699258_6220684316253724563_n.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=iLbumLxgySMAX8DTQ7I&_nc_ht=scontent.famm7-1.fna&oh=f6706957c3afddf02c082d2c8b2a025e&oe=6032AB29' , facebook :'https://www.facebook.com/lojain.nahhas.7' , linkedin : 'https://www.linkedin.com/in/lojain-nahhas-creative/' , gitHub : 'https://github.com/GforGNU' },

                        { id: '3', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'Enoooz' , studentImage :'https://s3-eu-west-1.amazonaws.com/grm-assets/28278/robert-downey-jr-iron-man.jpg' , facebook :'https://www.facebook.com/laith.alenooz.357' , linkedin : 'https://www.linkedin.com/in/laithalenooz/' , gitHub : 'https://github.com/laithalenooz' },

                        { id: '4', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'Jacoub' , studentImage :'https://avatars.githubusercontent.com/u/71829355?s=460&u=ab772fb234f2673202a3e736fd5f7b62c8764e67&v=4' ,facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi'  },

                        { id: '5', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'firas' , studentImage :'https://scontent.famm9-1.fna.fbcdn.net/v/t1.0-9/118777402_3405549822839175_7907296953818932221_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEnxghYXPr0qLLIb7vGHze6nTg7URL3ExOdODtREvcTE8VNQd8VW409F49XngsNwhi1Wn0hm3tpUG1uOy9-RKbM&_nc_ohc=K92gqH0XVHQAX-y5Qbb&_nc_ht=scontent.famm9-1.fna&oh=dbfe79b87696686f287791acbbc13da1&oe=6030EC04' , facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi' },

                        { id: '6', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'lara' , studentImage :'https://avatars.githubusercontent.com/u/71829656?s=460&u=17b3dca6ed4d9c13fbeb49c7a3c3fe0a66db1e91&v=4' , facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi' },
                    ],
                    showNickNameButton : false,
                } );
        }
        else {
            document.getElementById('nickName').style.display = "none";
            document.getElementById('oldName').style.display = "block";
            this.setState(
                {
                    students : [
                        { id: '1', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'mmr' , studentImage :'https://scontent.famm7-1.fna.fbcdn.net/v/t1.0-9/79416928_2563039093815545_8308397759170347008_o.jpg?_nc_cat=105&ccb=2&_nc_sid=09cbfe&_nc_ohc=5hnwWi5xAHMAX__ewxf&_nc_ht=scontent.famm7-1.fna&oh=c9fee1258e0b06252e3e784014d6cf1a&oe=6030A427' , facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi' },

                        { id: '2', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'lolo' , studentImage :'https://scontent.famm7-1.fna.fbcdn.net/v/t1.0-9/15726375_10154979096699258_6220684316253724563_n.jpg?_nc_cat=105&ccb=2&_nc_sid=174925&_nc_ohc=iLbumLxgySMAX8DTQ7I&_nc_ht=scontent.famm7-1.fna&oh=f6706957c3afddf02c082d2c8b2a025e&oe=6032AB29' , facebook :'https://www.facebook.com/lojain.nahhas.7' , linkedin : 'https://www.linkedin.com/in/lojain-nahhas-creative/' , gitHub : 'https://github.com/GforGNU' },

                        { id: '3', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'Enoooz' , studentImage :'https://s3-eu-west-1.amazonaws.com/grm-assets/28278/robert-downey-jr-iron-man.jpg' , facebook :'https://www.facebook.com/laith.alenooz.357' , linkedin : 'https://www.linkedin.com/in/laithalenooz/' , gitHub : 'https://github.com/laithalenooz' },

                        { id: '4', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'Jacoub' , studentImage :'https://avatars.githubusercontent.com/u/71829355?s=460&u=ab772fb234f2673202a3e736fd5f7b62c8764e67&v=4' ,facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi'  },

                        { id: '5', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'firas' , studentImage :'https://scontent.famm9-1.fna.fbcdn.net/v/t1.0-9/118777402_3405549822839175_7907296953818932221_n.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_eui2=AeEnxghYXPr0qLLIb7vGHze6nTg7URL3ExOdODtREvcTE8VNQd8VW409F49XngsNwhi1Wn0hm3tpUG1uOy9-RKbM&_nc_ohc=K92gqH0XVHQAX-y5Qbb&_nc_ht=scontent.famm9-1.fna&oh=dbfe79b87696686f287791acbbc13da1&oe=6030EC04' , facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi' },

                        { id: '6', image: 'https://static-cse.canva.com/blob/142356/removing-background-images_Unsplash.8b2a58cb.jpeg' , text : 'lara' , studentImage :'https://avatars.githubusercontent.com/u/71829656?s=460&u=17b3dca6ed4d9c13fbeb49c7a3c3fe0a66db1e91&v=4' , facebook :'https://www.facebook.com/maria.alzoubi.5/' , linkedin : 'https://www.linkedin.com/in/marya-alzu-bi/' , gitHub : 'https://github.com/Marya-Alzubi' },
                    ],
                    showNickNameButton : true,
                } );
        }
    }
    render() {
        // if (this.state.showNickNameButton){
        //
        //    document.getElementById('nickName').style.display = "block";
        //     document.getElementById('oldName').style.display = "none";
        //     const doesShow = this.state.showNickNameButton;
        //     this.setState( { showPersons: !doesShow } );
        // }
        // else {
        //     document.getElementById('nickName').style.display = "none";
        //     document.getElementById('oldName').style.display = "block";
        // }
        return (
            <Container className='mt-4'>
            {/*    { this.state.showNickNameButton*/}
            {/*        ?*/}
                <Button style={{display:"block"}} onClick={this.toggleNickNameHandler} id='nickName' variant="outline-secondary">nick name </Button>
            {/*        :*/}
                <Button style={{display:"none"}} onClick={this.toggleNickNameHandler} id='oldName' variant="outline-secondary">old name </Button>
            {/*}*/}
                <Row>
                    {this.state.students.map((student, index) => {
                            return <CardComp
                                // nickName={this.nickNameHandler}
                                // oldName={this.oldNameHandler}
                                nickName={this.toggleNickNameHandler}
                                oldName={this.toggleNickNameHandler}
                                delete={() => this.deleteStudentHandler(index)}
                                change={(event) => this.changeNameHandler(event, student.id)}
                                key={student.id}
                                image={student.image}
                                text={student.text}
                                studentImage={student.studentImage}
                                linkedin={student.linkedin}
                                facebook={student.facebook}
                                gitHub={student.gitHub} />
                        }
                    )
                    }
                </Row>
            </Container>
        );
    }
}

export default Student;