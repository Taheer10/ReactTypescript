
import './App.css';
import { Text } from './components/polymorphic/Text';
import User from './components/UseState/User';
import Button from './components/Events/Button';
import Input from './components/Events/Input';
import Greet from './components/Greet';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Status from './components/Status';
import Container from './components/StyleProps/Container';
import IsLoggedIn from './components/UseState/IsLoggedIn';
import Counter from './components/UseReducerHook/Counter';
import { ThemeContextProvider } from './components/UseContext/ThemeContext';
import { Box } from './components/UseContext/Box';
import { UserContextProvider } from './components/UseContext/UserContext';


function App() {
  // const PersonName ={
  //   first : 'Eden',
  //   last: 'Hazard'
  // }
  
  // //Array of objects
  // const nameList = [
  //   {
  //     first : 'Tahir',
  //     last: 'Hussain'
  //   },
  //   {
  //     first : 'Mohan',
  //     last: 'Dhaurali'
  //   },
  //   {
  //     first : 'Bisu',
  //     last: 'Baral'
  //   }
  // ]

  return (
    <div className="App">

   {/* <Status status='loading'/>
   <Heading>Heading Place Holder</Heading>
   <Oscar>
     <Heading>Hello Oscar</Heading>
   </Oscar> */}

    {/* <Greet name='Tahir' messageCount={10} isloggedin={false}/>
    <Person name={PersonName}/>
    <PersonList names ={nameList}/> */}
    {/* <Greet name='Tahir' isloggedin={true}/> */}
  
      {/* <Container styles={{background:'red',height:'200px',width:'500px', border :'20px solid blue'}}/> */}

      {/* <IsLoggedIn/> */}
      {/* <User/> */}

      {/* <Counter/> */}
   
         {/* <UserContextProvider>
           <User/>
         </UserContextProvider> */}

          {/* <List
        items={['Batman', 'Superman', 'Wonder Woman']}
        onClick={item => console.log(item)}
      />
     
     <List items={[1, 2, 3]} onClick={item => console.log(item)} /> */}
      {/* <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            last: 'Wayne'
          },
          {
            id: 2,
            first: 'Clark',
            last: 'Kent'
          },
          {
            id: 3,
            first: 'Princess',
            last: 'Diana'
          }
        ]}
        onClick={item => console.log(item)}
      /> */}

        {/* <RandomNumber value={10} isPositive />  */}
        {/* <Toast position='center' /> */}
       
        {/* <CustomButton variant='primary' onClick={() => console.log('Clicked')}>
        Button Label
      </CustomButton> */}
        
        <Text size='lg' as='h1'>
        Heading
      </Text>
      <Text size='md' as='p'>
        Paragraph
      </Text>
      <Text size='sm' color='secondary' as='label' htmlFor='someId'>
        Label
      </Text>


         {/* <ThemeContextProvider>
           <Box/>
         </ThemeContextProvider> */}
    {/* <Button handleClick={(event,id) =>{
      console.log('Button Clicked',event, id)
    }}/>

    <Input value='' handlechange={event => console.log(event)}/> */}
    </div>
  );
}

export default App;
