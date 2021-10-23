import logo from './logo.svg';
import './App.css';
import  Code from './Code';
import FwdBwd from './FwdBwd';
import CursorIter from './CursorIter'
import List from './List'

const code_recursive = 
`int rec_min(struct node *head) {
  if (head->next == NULL) {
         return head->data;
   } else {
          return minimum(rec_min(head->next), head->data);
   }
}

int min(int a, int b){
  if (a > b){
    return b;
  } else {
    return a;
  }
}
`

const code_iterative = 
`int iter_min(struct node *head) {
  struct node *curr = head;
  int min; 
  while(curr != NULL) {
       min = minimum(min, curr->data);
       curr = curr->next;
  }
  return min;
}

int min(int a, int b){
  if (a > b){
    return b;
  } else {
    return a;
  }
}
`


function App() {
  return (
    <div className="App">
      <div className="grid-container">
        <div id="head-item">
          <label>Find the minimum of a linked list </label>
          <select name="rec_iter" id="rec_iter">
            <option value="iterative">iteratively</option>
            <option value="recursive">recursively</option>
          </select>
        </div>
        <div id="diagram-item">
          <List></List>
        </div>
        

        <div id="stack-item">
          <p>Stack frames go here!!!</p>
        </div>

        <div id="cursor-item">
          <CursorIter></CursorIter>
        </div>

        <div id="code-item">
          <Code
            code={code_iterative}
            language="clike"
          />
        </div>

        <div id="fwd-bwd-item">
          <FwdBwd></FwdBwd>
        </div>
        
      </div>
    </div>
  );
}

export default App;
