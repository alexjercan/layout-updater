import layout_updater
from plotly_resampler import FigureResampler
from dash import Dash, callback, html, Input, Output, dcc, no_update, State
import plotly.graph_objects as go
from plotly.subplots import make_subplots

app = Dash(__name__)

figure = make_subplots(
    rows=2, cols=1, specs=[[{"type": "scatter"}], [{"type": "scatter"}]]
)

linscale_args = {f"yaxis{'' if index == 0 else index+1}.type": "linear" for index in range(2)}
logscale_args = {f"yaxis{'' if index == 0 else index+1}.type": "log" for index in range(2)}


figure.update_layout(
    autosize=True,
    hovermode="closest",
    showlegend=True,
    legend=dict(
        orientation="h",
        yanchor="bottom",
        y=1.10,
        xanchor="left",
        x=0.01,
    ),
    height=800,
    margin={"r": 0, "t": 0, "l": 0, "b": 0},
    updatemenus=[
        dict(
            type="dropdown",
            buttons=list(
                [
                    dict(
                        label="Linear",
                        method="relayout",
                        args=[linscale_args],
                    ),
                    dict(
                        label="Log",
                        method="relayout",
                        args=[logscale_args],
                    ),
                ]
            ),
            pad={"r": 10, "t": 10},
            showactive=True,
            x=0.1,
            xanchor="left",
            y=1.1,
            yanchor="top",
        )
    ],
)

figure.add_trace(
    go.Scattergl(x=[1, 2, 3, 4, 5, 6, 7], y=[1, 2, 3, 4, 5, 6, 7]),
    row=1,
    col=1,
)

figure.add_trace(
    go.Scattergl(x=[1, 2, 3, 4, 5, 6, 7], y=[7, 6, 5, 4, 3, 2, 1]),
    row=2,
    col=1,
)

app.layout = html.Div(
    [
        layout_updater.LayoutUpdater(
            id="input",
            gdID="figure",
        ),
        dcc.Graph(
            id="figure",
            figure=figure,
        ),
        html.Button(
            id="button",
            children="Add annotation",
        ),
        html.Button(
            id="button2",
            children="Add shape",
        ),
    ]
)


@app.callback(
    Output("input", "shapes"),
    Input("button2", "n_clicks"),
    State("figure", "figure"),
)
def add_shape(n_clicks, fig):
    if n_clicks is None:
        return no_update

    return [{'type': 'line', 'x0': 1, 'x1': 1, 'xref': 'x', 'y0': 0, 'y1': 1, 'yref': 'y domain'}]


if __name__ == "__main__":
    app.run_server(debug=True)


@app.callback(
    Output("input", "annotations"),
    Input("button", "n_clicks"),
    State("figure", "figure"),
)
def add_anno(n_clicks, fig):
    if n_clicks is None:
        return no_update

    return [
        {
            "text": "text",
            "x": 1,
            "y": 1,
            "showarrow": True,
            "arrowhead": 2,
            "ax": 0,
            "ay": -40,
        }
    ]


if __name__ == "__main__":
    app.run_server(debug=True)
