import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('http://[REPLACE-THIS-WITH-YOUR-CODESPACE-NAME]-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => setActivities(data))
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="container mt-4">
      <Card>
        <Card.Header as="h1">Activities</Card.Header>
        <Card.Body>
          <table className="table table-striped">
            <thead>
              <tr>
                <th>Activity Type</th>
                <th>Duration</th>
              </tr>
            </thead>
            <tbody>
              {activities.map(activity => (
                <tr key={activity._id}>
                  <td>{activity.activity_type}</td>
                  <td>{activity.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <Button variant="primary">Add Activity</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Activities;