% Auto-generated: do not edit by hand
\name{layoutUpdater}

\alias{layoutUpdater}

\title{LayoutUpdater component}

\description{
LayoutUpdater is a component which updates the annotations of a plotly graph.
}

\usage{
layoutUpdater(id=NULL, data=NULL, gdID=NULL, initLayout=NULL)
}

\arguments{
\item{id}{Character. The ID used to identify this component in Dash callbacks.}

\item{data}{Unnamed list. The data to update the graph with,
it is an object containing
  - list containing the annotations
  - list with shapes
  - list updateData}

\item{gdID}{Character. The id of the graph-div whose traces should be updated.

.. Note:

  * if you use multiple graphs; each graph MUST have a unique id; otherwise we
    cannot guarantee that resampling will work correctly.
  * LayoutUpdater will determine the html-graph-div by performing partial matching
    on the "id" property (using `gdID`) of all divs with classname="dash-graph".
    It will select the first item of that match list; so if multiple same
    graph-div IDs are used, or one graph-div-ID is a subset of the other (partial
    matching) there is no guarantee that the correct div will be selected.}

\item{initLayout}{Named list. The initial layout of the component}
}

\value{named list of JSON elements corresponding to React.js properties and their values}

