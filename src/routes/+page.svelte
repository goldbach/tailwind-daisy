<h1 class="h1">Hello world! h1</h1>
<h2 class="h2">Hello world! h2</h2>
<h3 class="h3">Hello world! h3</h3>

<div class="flex flex-wrap border border-dashed flex-1 p-8 *:p-4 *:border">
    <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore,
        laborum. Quidem placeat doloribus excepturi explicabo? Eos id quasi
        reprehenderit, accusantium quaerat adipisci, aliquam impedit dolor vel
        molestiae nostrum! Quidem, rem?
    </p>

    <div class="basis-1/2">
        <button class="btn btn-sm">Small (sm)</button>
        <button class="btn">Button</button>
        <button class="btn btn-primary">Primary</button>
        <button class="btn btn-primary btn-outline">Outline</button>
        <button class="btn btn-lg">Large (lg)</button>
    </div>
    <div class="basis-1/2">
        <button class="btn btn-secondary">secondary</button>
        <button class="btn btn-accent">accent</button>
        <button class="btn btn-info">info</button>
        <button class="btn btn-success">success</button>
        <button class="btn btn-error">error</button>
        <button class="btn btn-ghost">ghost</button>
        <button class="btn btn-link">link</button>
    </div>

    <div class="basis-1/2">
        <form class="bg-base-200 border-base-300 *:mt-4 form-primary">
            <label for="foo" class="label">Label</label>
            <input type="text" class="input" id="foo">
            <textarea class="textarea" name="txt" id="txt" cols="30" rows="3"></textarea>
            <div>
                <select class="select">
                    <option value="foo">foo</option>
                    <option value="bar">bar</option>
                </select>
            </div>
            <button class="btn mt-6" type="submit">Submit</button>
            <button class="btn btn-primary mt-4" type="submit">Submit</button>
        </form>
    </div>
    <div class="basis-1/2">
        <form class="bg-base-200 border-base-300 *:mt-4">
            <label for="foo" class="label label-text">Label</label>
            <input type="text" class="input input-primary" id="foo">
            <textarea class="textarea textarea-primary" name="txt" id="txt" cols="30" rows="3"></textarea>
            <div>
                <select class="select select-primary">
                    <option value="foo">foo</option>
                    <option value="bar">bar</option>
                </select>
            </div>
            <button class="btn mt-6" type="submit">Submit</button>
            <button class="btn btn-primary mt-4" type="submit">Submit</button>
        </form>
    </div>

</div>
<div class="p-8 *:p-2 *:mt-2 *:border *:rounded *:h-24">
    <div class="bg-neutral  text-neutral-content">neutral</div>
    <div class="bg-base-100 text-base-content">base-100</div>
    <div class="bg-base-200 text-base-content">base-200</div>
    <div class="bg-base-300 text-base-content">base-300</div>
</div>
