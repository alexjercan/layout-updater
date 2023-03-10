# AUTO GENERATED FILE - DO NOT EDIT

export layoutupdater

"""
    layoutupdater(;kwargs...)

A LayoutUpdater component.
LayoutUpdater is a component which updates the annotations of a plotly graph.
Keyword arguments:
- `id` (String; optional): The ID used to identify this component in Dash callbacks.
- `annotations` (Array; optional): The data to update the graph with, it is a list containing the annotations
- `gdID` (String; required): The id of the graph-div whose traces should be updated.

.. Note:

  * if you use multiple graphs; each graph MUST have a unique id; otherwise we
    cannot guarantee that resampling will work correctly.
  * LayoutUpdater will determine the html-graph-div by performing partial matching
    on the "id" property (using `gdID`) of all divs with classname="dash-graph".
    It will select the first item of that match list; so if multiple same
    graph-div IDs are used, or one graph-div-ID is a subset of the other (partial
    matching) there is no guarantee that the correct div will be selected.
- `initLayout` (Dict; optional): The initial layout of the component
- `shapes` (Array; optional): The data to update the graph with, it is a list containing the shapes
- `updateData` (Array; optional): The data to update the graph with, must contain the `index` property for
each trace; either a list of dict-traces or a single trace
"""
function layoutupdater(; kwargs...)
        available_props = Symbol[:id, :annotations, :gdID, :initLayout, :shapes, :updateData]
        wild_props = Symbol[]
        return Component("layoutupdater", "LayoutUpdater", "layout_updater", available_props, wild_props; kwargs...)
end

