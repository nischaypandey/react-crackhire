import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const Attribute = props => {
    return (
        <Button variant="light" className="text-capitalize ml-3">{props.value}</Button>
    );
};

const ProfileField = (props) => {
    return (
        <div className="pl-3">          
          <p className="text-capitalize mr-2">{props.attr} :
            {Array.isArray(props.value) ? props.value.map(v => <Attribute value={v}/>) :
             <Attribute value={props.value}/>}
          </p>
        </div>
    );
};

const Profile = (props) => {
    console.log(props.profile);
    return (
        <Card className="shadow-sm p-2">
          { Object.keys(props.profile).map(key => <ProfileField attr={key}
                                                                value={props.profile[key]} />) }
        </Card>
    );
};

export default Profile;
