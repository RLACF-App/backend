
exports.seed = (knex) => {
  // Deletes ALL existing entries
  return knex('opportunities').del()
    .then(() => {
      // Inserts seed entries
      return knex('opportunities').insert([
        {
          id: 1,
          name: 'Roosevelt Center',
          description: 'Volunteers have helped make the Roosevelt Center a vibrant home for arts and culture.  People like you have donated their time, talents, energy, and enthusiasm to help the staff and the Center function as a  community asset and resource.  There are many ways to contribute to the Center and we are always willing to explore new and different opportunities for volunteers.  To become a part of this exciting work or for more information simply complete the volunteer application and the volunteer coordinator will contact you, call 406 446-2820 or e-mail betty@rlacf.org.  We look forward to having you on our team. Thanks for your support!',
          img: 'https://images.unsplash.com/photo-1557660559-42497f78035b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2230&q=80',
          owner: 1,
        },
        {
          id: 2,
          name: 'Poster OutReach',
          description: 'Help Us reach larger audiences by spreading the word with posters. We provide the posters and locations for distribution. You would be responsible for getting them out of our office and into the community.',
          img: 'https://images.unsplash.com/photo-1557660559-42497f78035b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2230&q=80',
          owner: 1,
        },
        {
          id: 3,
          name: 'Handy Person',
          description: 'Help with those tricky building projects and construction pieces whether it’s fixing office furniture or patching holes. The Roosevelt Center needs a lot of TLC to bring it back to its former glory. Help us honor history and lend your hand today.',
          img: 'https://images.unsplash.com/photo-1557660559-42497f78035b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2230&q=80',
          owner: 1,
        },
        {
          id: 4,
          name: 'Calendar Curator',
          description: 'Update our community calendar with events, activities, and forums from around town. We provide the supplies from newspapers, newsletters, and other calendars which will create a centralized calendar for everyone to use. You will have the opportunity to reach out to the community and help bring everyone together.',
          img: 'https://images.unsplash.com/photo-1557660559-42497f78035b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2230&q=80',
          owner: 1,
        },
        {
          id: 5,
          name: 'Story Teller',
          description: 'Meet new people and listen to their experiences that will inspire the community. Use your writing skills to share their story in a way that will captivate and express the feeling of the experience. The Foundation works with hundreds of volunteers who would love to share their stories.',
          img: 'https://images.unsplash.com/photo-1557660559-42497f78035b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2230&q=80',
          owner: 1,
        },
        {
          id: 6,
          name: 'Navigators',
          description: 'Connect low-income individuals and families to the resources they need by becoming a Navigator. You would be responsible for helping them fill out forms and providing assistance navigating the resources available to them. We train all Navigators with all of the information that they need to complete the applications with others who need assistance. You would make a big difference in helping people get connected to services that would improve their lives.',
          img: 'https://images.unsplash.com/photo-1557660559-42497f78035b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2230&q=80',
          owner: 1,
        },
        {
          id: 7,
          name: 'Housing Committee',
          description: 'Work alongside other interested community members to create affordable housing opportunities to people who work in Red Lodge. We are currently working alongside Helena Habitat for Humanity and making plans to build 4-6 units this spring in the Spires Subdivision. Make a difference by building homes.',
          img: 'https://images.unsplash.com/photo-1557660559-42497f78035b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2230&q=80',
          owner: 1,
        },
        {
          id: 8,
          name: 'Deliver Firewood',
          description: 'We offer firewood to families to to heat their homes efficiently during cold winter months. We need your help to load wood on pallets. Sometimes we need to deliver it to the appreciative families that you would be helping.',
          img: 'https://images.unsplash.com/photo-1557660559-42497f78035b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2230&q=80',
          owner: 1,
        },
        {
          id: 9,
          name: 'Special Event Coordinator',
          description: 'Do you like to plan a good party of gathering? If so, we need your help. We host many friend raising events, forums, and presentations in our community. We could use your help in the planning, development and set up. If you like to socialize, this is the volunteer opportunity for you.',
          img: 'https://images.unsplash.com/photo-1557660559-42497f78035b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2230&q=80',
          owner: 1,
        },
        {
          id: 10,
          name: 'Chalk Wall',
          description: 'Like to do art in chalk with a message? Please help us to keep our big, outdoor red chalk wall informative and current. We have all of the supplies and can offer timely messages if you are interested in sharing your talents in this way. Help us spread the word through chalk art.',
          img: 'https://images.unsplash.com/photo-1557660559-42497f78035b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2230&q=80',
          owner: 1,
        },

      ]);
    });
};
