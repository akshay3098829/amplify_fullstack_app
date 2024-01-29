import logo from './logo.svg';
import "@aws-amplify/ui-react/styles.css"
import {
  Button,
  Card,
  Heading,
  Image,
  View,
  withAuthenticator,
} from "@aws-amplify/ui-react";
function App({signOut}) {
  return (
    <View>
      <Card>
        <Image src={logo} className='App-logo' alt ="logo"/>
        <Heading level={1}>You have succesfully Login</Heading>
      </Card>
      <Button onClick={signOut}>Log Out</Button>
    </View>
  );
}

export default withAuthenticator(App);
