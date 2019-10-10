import { addCatlog } from "../Redux/Actions";
import { ActionsType } from "../Types/ActionTypes";
import { connect } from "react-redux";
import Page1 from "../Component/Page1";
import { Dispatch } from "redux";
import { Catalog } from "../Types/ReducersTypes";
import { AppStateType } from "../Redux/Reducers";

export interface Page1DispatchPtops {
  addCatalog: (catalog: Catalog) => void;
}

export interface Page1StateProps {
  catalog: Catalog;
}

const mapDispatchToProps = (
  dispatch: Dispatch<ActionsType>
): Page1DispatchPtops => ({
  addCatalog: (catalog: Catalog) => dispatch(addCatlog(catalog))
});

const mapStateToProps = (state: AppStateType): Page1StateProps => ({
  catalog: state.catalog
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Page1);
