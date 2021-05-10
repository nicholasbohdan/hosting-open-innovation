import {
  Form,
  FormGroup,
  Label,
  Input,
  FormText,
  Button,
} from "reactstrap";
import { useState } from "react";
import { Camera, ChevronDown } from "react-iconly";

const ProfileForm = () => {
  const imageUrl = "/images/profile-picture.jpg";

  const [avatar, setAvatar] = useState(imageUrl ? imageUrl : "");

  const changePicture = (event) => {
    const reader = new FileReader();
    const files = event.target.files;

    reader.onload = function () {
      setAvatar(reader.result);
    };
    reader.readAsDataURL(files[0]);
  };

  return (
    <Form>
      <FormGroup>
        <Label className="label-kalbe-form" for="profilePicture">
          Profile Picture
        </Label>
        <div className="w-100 image-container image-ratio-profileForm border-radius-10">
          <img
            src={avatar}
            className="w-100 h-100 image-inside border-radius-10"
          />
          <Button
            tag={Label}
            className="float-right m-0 p-0 shadow d-flex justify-content-center align-items-center"
            style={{
              position: "absolute",
              bottom: "1em",
              right: "1em",
              height: "2.5em",
              width: "2.5em",
              backgroundColor: "#FFFFFF",
              borderColor: "#FFFFFF",
              borderRadius: "50%",
            }}
          >
            <Camera set="light" className="text-kalbe-black" />
            <Input
              hidden
              onChange={changePicture}
              type="file"
              name="file"
              id="profilePicture"
              accept="image/*"
            />
          </Button>
        </div>
        <FormText className="sublabel-kalbe-form text-kalbe-black">
          Use 1:1 for best size
        </FormText>
      </FormGroup>
      <FormGroup>
        <Label className="label-kalbe-form" for="nameInput">
          Name
        </Label>
        <Input
          type="text"
          name="name"
          className="border-radius-10 height-56"
          id="nameInput"
          value="Arya Mukti"
          onChange={() => {}}
        />
      </FormGroup>
      <FormGroup>
        <Label className="label-kalbe-form" for="emailInput">
          Email
        </Label>
        <Input
          type="email"
          name="email"
          className="border-radius-10 height-56"
          id="emailInput"
          value="arya.mukti@kalbe.co.id"
          onChange={() => {}}
        />
      </FormGroup>
      <FormGroup>
        <Label className="label-kalbe-form" for="phoneInput">
          Phone Number
        </Label>
        <Input
          type="text"
          name="phone"
          className="border-radius-10 height-56"
          id="phoneInput"
          value="089621475943"
          onChange={() => {}}
        />
      </FormGroup>
      <FormGroup>
        <Label className="label-kalbe-form" for="postSetting">
          Post Setting
        </Label>
        <Input
          type="select"
          name="select"
          className="border-radius-10 height-56"
          id="postSetting"
        >
          <ChevronDown set="light" primaryColor="blueviolet" />
          <option>Everyone can view my post</option>
          <option>Only friends can view my post</option>
          <option>Hide my post from everyone</option>
        </Input>
      </FormGroup>
      <Button className="w-100 mt-3 bg-kalbe-green border-radius-10 height-48">
        Save Changes
      </Button>
    </Form>
  );
};

export default ProfileForm;
