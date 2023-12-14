function hasPath(graph, source, dest) {
  const stack = [source];
  while (stack.length>0) {
      const current = stack.pop();
      if(current === dest) {
        return true;
      }
      for(let neighbore of graph[current]) {
        stack.push(neighbore);
      }
  }
  return false;
}
const graph = {
  f: ['g','i'],
  g: ['h'],
  h: [],
  i: ['g', 'k'],
  j: ['i'],
  k: []
};

console.log('Has path = ' , hasPath(graph, 'f', 'k'));

/*
Helm charts  : Deploy the service like Python or Node JS.
Tenant service: Jupiter
       Cluster - Web app.
       build the service, then push the image ECR (helm-chart) auto-scaling.

dev, beta, alfa, prod.
some of the ENV from the secrates from AWS
Cross cluster :

// singleton example

class SingletonExample {
  obj = null;
  constructor() {

  }
  static getInstance() {
    if(!this.obj) {
      this.obj = new SingletonExample();
    }
    return this.obj;
  }
}

const singletonObject1 = SingletonExample.getInstance();
const singletonObject2 = SingletonExample.getInstance();

console.log(singletonObject1 === singletonObject2);

-- Adding proper loging or console statements for all the services.
   -- fluent bit --> will elastic service
   -- Use the try and catch blocks to identify the failure reason. Logger statements with error codes.
   -- Stack trace custom logging package (tenant_id, uuid, token, elastic search, PI data)
   -- How to catch the infra related erors.
      - identify the right stack. (intrastructure)
      - Was there any change recently.
      - Any depolyment or release or upgrade to the software.
   -- 30 mins rule
      - Wrong code or wrong method and ask for the help.
   -- Try to replicate the problem.
      - Solution, it should be highest priority.
      - R-go workflow orchitecturtion candidate explained.
      - Hostfix. (2-8 hrs)
   -- Call for the war-room and take help from
   -- How you do the code review
      - It's good learning experience
      - Has the checklist.
      - Use the PR template filled correctly.
      - DO I have the all the information about the PR.
      - Security, Jira ticket.
      - What is the PR status. (Do-notrevew),
      - All the checks are passsing (Sonarqube, UT, Linting)
      - Functionality of the PR (check the Functionality is working)
      - All the functional testcases are covering. Meeting the coverage standards.
      - 3rd package lib are used, it that discussed and reviewed by the security team.
      - Get the swager API Specs.
      - netpics veriables, names white line etc.
      - Do not repeate yourself.
    - Non-functional requirements
      - Where component is un-mounted.
      - is there any memory leaks.
      - What is the security risk.
   -


*/
