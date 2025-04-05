import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';

function Teams() {
  const [teams, setTeams] = useState([]);

  useEffect(() => {
    fetch('http://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/teams/')
      .then(response => response.json())
      .then(data => setTeams(data))
      .catch(error => console.error('Error fetching teams:', error));
  }, []);

  return (
    <div className="container mt-4">
      <Card>
        <Card.Header as="h1">Teams</Card.Header>
        <Card.Body>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Team Name</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.map(team => (
                <tr key={team._id}>
                  <td>{team.name}</td>
                  <td>{team.members.map(member => member.username).join(', ')}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Teams;