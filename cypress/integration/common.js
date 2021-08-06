import matches from 'lodash/matches';

export function findMultiAndMatch(count, findObj, matchObj, equalObj) {
  let data = [];
  function assert(body) {
    data = data.concat(
      body?.list?.filter(matches(findObj)).filter(matches(matchObj)) || [],
    );
    if (data.length < count) {
      cy.wait('@post', { timeout: 3000 }).its('request.body').then(assert);
    } else {
      data[0] && expect(data[0]).to.nested.include(equalObj);
      expect(data.length).to.be.equal(count);
    }
  }
  cy.wait('@post').its('request.body').then(assert);
}

export function matchMultiAndMatch(count, findObj, matchObj, equalObj) {
  // findMultiAndMatch(count, matches(findObj), matches(matchObj));
  findMultiAndMatch(count, findObj, matchObj, equalObj);
}
