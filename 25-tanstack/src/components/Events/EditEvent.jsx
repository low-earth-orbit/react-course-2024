import { Link, useNavigate, useParams } from "react-router-dom";

import Modal from "../UI/Modal.jsx";
import EventForm from "./EventForm.jsx";
import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchEvent, queryClient, updateEvent } from "../../util/http.js";
import LoadingIndicator from "../UI/LoadingIndicator.jsx";
import ErrorBlock from "../UI/ErrorBlock.jsx";

export default function EditEvent() {
  const navigate = useNavigate();
  const { id } = useParams();

  const { data, isPending, isError, error } = useQuery({
    queryKey: ["events", id],
    queryFn: ({ signal }) => fetchEvent({ signal, id }),
  });

  const { mutate } = useMutation({
    mutationFn: updateEvent,
    onMutate: async (data) => {
      // optimistic updating
      // update the query cached by tanstack
      const previousEventData = queryClient.getQueryData(["events", id]); // store event data before the change

      const newEventData = data.event;

      await queryClient.cancelQueries({ queryKey: ["events", id] }); // cancel on-going queries

      queryClient.setQueryData(["events", id], newEventData); // set our own data for the cached query result

      return { previousEventData }; // this goes to `context`
    },
    onError: (error, data, context) => {
      // rollback if error
      queryClient.setQueryData(["events", id], context.previousEventData); // set our own data for the cached query result
    },
    onSettled: () => {
      // when the mutation is done, not matter it's succeeded or failed
      // this is to make sure that BE and FE have the same data
      queryClient.invalidateQueries(["events", id]); // fetch data from backend
    },
  });

  function handleSubmit(formData) {
    mutate({ id, event: formData });
    handleClose();
  }

  function handleClose() {
    navigate("../");
  }

  let content;

  if (isPending) {
    content = (
      <div className="center">
        <LoadingIndicator />
      </div>
    );
  }

  if (isError) {
    content = (
      <>
        <ErrorBlock
          title="Failed to load event"
          message={error.info?.message || "Failed to load event"}
        />
        <div className="form-actions">
          <Link to="../" className="button">
            Okay
          </Link>
        </div>
      </>
    );
  }

  if (data) {
    content = (
      <EventForm inputData={data} onSubmit={handleSubmit}>
        <Link to="../" className="button-text">
          Cancel
        </Link>
        <button type="submit" className="button">
          Update
        </button>
      </EventForm>
    );
  }

  return <Modal onClose={handleClose}>{content}</Modal>;
}
