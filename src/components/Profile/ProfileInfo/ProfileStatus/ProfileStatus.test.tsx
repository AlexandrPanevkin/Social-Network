import React from "react";
import {create} from "react-test-renderer";
import {ProfileStatus} from "./ProfileStatus";

const mockCallback = jest.fn();

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatus updateStatus={mockCallback} status="test" />);
        const instance = component.getInstance();
        expect(instance?.instance.state.status).toBe("test");
    });

    test("after creation <span> should be displayed", () => {
        const component = create(<ProfileStatus updateStatus={mockCallback} status="test" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span).not.toBeNull();
    });
    test("after creation <input> shouldn't be displayed", () => {
        const component = create(<ProfileStatus updateStatus={mockCallback}  status="test" />);
        const root = component.root;
        expect(() => {
            let input = root.findByType("input");
        }).toThrow();
    });

    test("after creation <span> should contains correct status", () => {
        const component = create(<ProfileStatus updateStatus={mockCallback}  status="test" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe("test");
    });

    test("input should be displayed in editMode instead of span", () => {
        const component = create(<ProfileStatus updateStatus={mockCallback} status="test" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect(input.props.value).toBe("test");
    });

    test("callback should be called", () => {
        const component = create(<ProfileStatus status="test" updateStatus={mockCallback} />);
        const instance = component.getInstance();
        instance?.instance.deactivateEditMode();
        expect(mockCallback.mock.calls.length).toBe(1);
    });
});