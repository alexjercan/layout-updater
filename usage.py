import layout_updater
from dash import Dash, callback, html, Input, Output, dcc

app = Dash(__name__)

app.layout = html.Div([
    layout_updater.LayoutUpdater(
        id='input',
        gdID="figure",
    ),
    dcc.Graph(
        id="figure",
        figure=None,
    ),
])

if __name__ == '__main__':
    app.run_server(debug=True)
