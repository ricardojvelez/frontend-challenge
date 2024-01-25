# Demo
Hi! I'm leaving some details below to help the review process. First time playing with Vue, my apologies upfront for any oversights💪
I recorded a quick demo of my work. Check it out here: https://www.loom.com/share/c675ba5b90574536ad31330b9798416b?src=composer. Let me know if you have any questions or need clarification. Thanks!

# Structure
![image](https://github.com/ricardojvelez/frontend-challenge/assets/36717562/7f4ea2ef-a400-4c96-ae64-32c0edda0a54)

#Disclaim/Reflection
1. I didn't mock up the UI perfectly. I'm adhering to timeboxes while addressing various challenges from interviews, and this detail(full-width navbar) took longer than expected, so I chose to skip it. I attempted to configure a layout while editing the main.css and base.css, but probably missed a small detail. I could inspect the DOM on Chrome Developer tools and edit the css but I couldn't make it work on the main.css/base.css
2. I didn't add tests. I'm super big on tests but given it's a challenge, I chose not to commit fully here. We can discuss it later in our discussion.
What I normally do is:
- Unit test a file (Logic + Snapshots)
- Mock the file on the parent component, unit test the parent
- The higher component on the hierarchy, tests "end-to-end"
- Mock requests and hooks on each file, as I highly trust the unit tests each one of them has.
I don't follow these blindly, I'm always open to discussion and to adapt to your practices!

#Feedback
- Mocky endpoint is not functioning perfectly(I believe, correct me if I'm wrong!). I had to sanitize the data to be able to read it.
- A post request always returns the standard JSON. I'm not sure if that is the goal, for a short time I was confused if I was sending the data correctly. Eventually, I checked the payload and confirmed it was good on my end. I guess it's Mocky's limitations but I still wanted to address it here! I also tested the endpoint on Postman.
