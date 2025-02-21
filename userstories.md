I want to develop a web application using react js and bootstrap. So please give step by step process to implement following requirements
		
		Epic user story 1 : Implement the header as a dynamic reusable component.
			1) Implement a header by maintaining Application name at the centre of header.
			2) Implement dynamic Page name at the starting of the header (example:  Home(Dashboard), Edit project, Child project….etc)
			3) Implement dynamic profile name at the end of the header based on us

    Epic user story 2: Implement navigation bar at left side of the page with actionable buttons (Home, Design, VPD, Admin, Feedback)
		
			1) Home : When user click on Home it should navigate to Home (Dashboard). (Eg: Home.js). If you are on the same page, the button should be disabled.
				Acceptance criteria : 1. Button name should be underlined  2. Button should be in yellow color and it should be in Gray when it is disabled.
			2) Design : When user click on Home it should navigate to  Design
      3) VPN : (Disabled)
      4) Admin : This button should be disabled for all the users except for Admins.
      5) Feedback : When user click on Home it should navigate to  Feedback . (Eg: Feedback.js). If you are on the same page, the button should be disabled.

      Epic user story 3: Implement following two search bars at the top of the home page after the header.
      1.project type search bar(cpi/npi/biq/deviation)-it should be in yellow color and search icon in the end

      2.partnum search bar - it shoul be in yellow color and search icon in the end
      when user click on search popup will dispaly with the projects which are using that parts.
      
      Epic User story 4: implement the list of projects in diffrent conditions and  projects at left side of the screen vertically.
      1. implement list of projects (Table-1):
          1) Title of the table : it shoul be in yellow color
          2) below are the header of the table1 ,headers are in grey color.
           ID(Project ID),Project Title,PartNumber(s),Proj.Status and Action(EditButton).
           when User clicks on edit button it will navigate to the Proejct Edit screen
          3) Here we are diplaying the list of projects which are Missing information .
           we get this info from Backend.

      2. implement list of projects(Table-2):
       1) Title of the table : it shoul be in yellow color,and the count of the MisMatch status and total projects count.
       2) below are the header of the table1 ,headers are in grey color.
           ID(Project ID),Project Title,Project CN(#),Proj.Status, Cn Status.
       3) ID has the option to navigate Project Edit Screen
       4) Here we are diplaying the list of projects which are mismatched with CN Status information .
       we get this info from Backend.

   Epic User story 5: implement the Count of  Design Project summary and VPD Summary of the   projects at Right side of the screen vertically.Header should be yellow color.

     1.Design Summary:
       In This displys the count of project in each status(New,Pending Launch,Design,Detail,Closed-Resolved,Closed-Canceled).

       1) Count displaying Buttons are in yellow Color
       2) status of the button are in transprent with border.
    
    2.VPD Summary:
       In This displys the count of project in each status(New,Pending Launch,Design,Detail,Closed-Resolved,Closed-Canceled).

       1) Count displaying Buttons are in yellow Color
       2) status of the button are in transprent with border.

      

      