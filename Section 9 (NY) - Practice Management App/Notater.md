## SECTION 9: PRACTICE PROJECT: PROJECT MANAGEMENT APP (WITH COMPONENTS, STATE, REFS & MORE)

Practicing with what we already have learned. Working with Components, State, Styling, Refs & Potals:

- Build a "Project Management" Web App
- Build, style, configure & re-use components
- Manage State
- Access DOM Elements & Browser APIs with Refs
- Manage JSX rendering positions with Portals

### Managing State to Switch Between Components

- ...prevState: dont loose the old state, by spreading operator.

const [projectState, setProjectState] = useState({
selectedProjectId: undefined,
projects: [],
});

const handleAddProject = (projectData) => {
setProjectState((prevState) => { // updating the state based on the old state so that we don't lose any old state.
const newProject = {
...projectData,
id: Math.random(),
};

      return {
        ...prevState, //  spreading all the existing state so that the existing data is copied into this newly returned object
        projects: [...prevState.projects, newProject], //And I want to update this array without losing any old projects. Therefore, I'll start by copying all the old projects with the spread operator into this new array. And then as a last element, we'll add the new project that should be added.
      };
    });

};

### Collecting User Input with Refs & Forwarded Refs

- I'll simply use refs because as you learned, you can use refs to connect them to HTML elements and then interact with those elements. For example, to retrieve the value of an input.
- We need to forward incoming refs so that we can use them in here and we can establish this cross component ref connection.
- With forWardRef: weWre able to set this ref prop on our custom component and it will get forwarded and can be used inside of that custom component.
-

### Validating User Input & Showing an Error Modal via useImperativeHandle

- I really wanna make this modal component as flexible as possible, and therefore I'll extract the children prop, which is passed to every component so that I can use my modal in the end as a wrapper around any content I want and that content will then be wrapped by that built-in dialog component.
- In addition, I want to use the portal feature provided by React to render this dialog and the content that will be wrapped by that dialog in a different place of the DOM.
- And then as you learn, you simply have to wrap this JSX code with createPortal like this. And as a second value, you should pass that HTML element where this content should be rendered in.
- For that, we use a browser API, document getElementByID to select this div, which has an idea of modal root.

  return createPortal(
    <dialog>{children}</dialog>,
    document.getElementById("modal-root")
  );

  - This modal component function will receive an extra parameter which will be the ref that might be set from outside on that component.
  - useImperativeHandle: To now expose a function that can be called from outside this component function, we must use useImperativeHandle. 
  - To this hook, you first pass this ref, which you are receiving. 
  - And then as a second value, you must provide a function that will be called by React in the end where you return an object that then exposes any properties or functions you want to expose to other components.

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog ref={dialog}>{children}</dialog>,
    document.getElementById("modal-root")
  );
});

-  The purpose of this component is to create a modal dialog that can be controlled imperatively using a ref
- useImperativeHandle(ref, () => {...});: This hook is used to customize the instance value that is exposed when using the ref. In this case, it returns an object with a single method open(). The open method is intended to be called on the ref, and when invoked, it calls dialog.current.showModal().
- return createPortal(<dialog ref={dialog}>{children}</dialog>, document.getElementById("modal-root"));: This line uses the createPortal function from React to render the modal outside the normal React component tree. It creates a <dialog> element with a ref set to the dialog ref and wraps the children inside it. 
- The modal is then appended to an element with the ID "modal-root" in the DOM.
- To use this Modal component, you would typically create a ref, attach it to the Modal component, and then use the ref's open() method to programmatically open the modal. 


### Making Projects Selectable & Viewing Project Details

- All that data should be received here as props. So here I expect to get the project prop, which should be such a project object so that here we can output project title and so on.
- 