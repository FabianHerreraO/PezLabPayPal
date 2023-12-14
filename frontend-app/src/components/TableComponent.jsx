import React from "react";

export default class TableComponent extends React.Component {
  render() {
    return (
      <table className="table">
        <thead className="thead-dark">
          <tr>
            {this.props.keys.map((k) => (
              <th scope="col" key={k}>
                {k.toUpperCase()}
              </th>
            ))}
            {this.props.actions && this.props.actions.length ? (
              <th scope="col" key="Actions">
                Acciones
              </th>
            ) : null}
          </tr>
        </thead>
        <tbody>
          {this.props.data.map((d, index) => (
            <tr key={index}>
              {this.props.keys.map((k) => (
                <td className="align-middle" key={d[k]}>
                  {d[k]}
                </td>
              ))}

              {this.props.actions ? (
                <td key={`actons-${index}`}>
                  {this.props.actions.length
                    ? this.props.actions.map((action, actionIndex) => (
                        <button
                          key={`${this.props.actions[actionIndex]}-${index}`}
                          type="button"
                          className="btn btn-primary me-2"
                          onClick={() => {
                            this.props.actionsHandler[actionIndex](d._id);
                          }}
                        >
                          {action}
                        </button>
                      ))
                    : null}
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
}
